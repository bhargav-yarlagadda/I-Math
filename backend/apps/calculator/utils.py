import google.generativeai as genai
import ast
import json
from PIL import Image
from constants import GEMINI_API_KEY

# Configure the Google Generative AI API
genai.configure(api_key=GEMINI_API_KEY)

def analyze_image(img: Image, dict_of_vars: dict) -> list:
    """
    Analyze a given image containing mathematical expressions, equations, or graphical problems using 
    the Gemini API and return a list of answers with computed results.

    Args:
        img (Image): The image object containing the mathematical or graphical problems.
        dict_of_vars (dict): A dictionary of variables and their assigned values for solving the expressions.

    Returns:
        list: A list of dictionaries, each containing 'expr', 'result', and 'assign' keys based on the analysis.
    """
    
    # Convert the variable dictionary to a JSON string
    dict_of_vars_str = json.dumps(dict_of_vars, ensure_ascii=False)
    
    # Create a clear, modular prompt
    prompt = (
        "You have been given an image with either mathematical expressions, equations, graphical problems, "
        "or hand-drawn diagrams, and you need to analyze and describe them. Based on the content of the image, "
        "perform one of the following actions:\n\n"

        "1. **Simple Mathematical Expressions**: If the image contains expressions like '2 + 2', '3 * 4', or '7 - 8', "
        "solve the expression using the PEMDAS rule. Return the result in a list with a single dictionary: "
        "{'expr': given expression, 'result': calculated answer}.\n\n"

        "2. **Set of Equations**: If the image contains equations such as 'x^2 + 2x + 1 = 0' or '3y + 4x = 0', "
        "solve for the given variable(s) and return the result as a comma-separated list of dictionaries. "
        "Each dictionary should contain 'expr' (the variable) and 'result' (the solved value), e.g., "
        "{'expr': 'x', 'result': 2, 'assign': True}.\n\n"

        "3. **Assigning Values to Variables**: If variables like 'x = 4', 'y = 5', or 'z = 6' are present, "
        "assign values to these variables and return them in the format: "
        "{'expr': 'x', 'result': 4, 'assign': True}. Return as a list of dictionaries for each variable.\n\n"

        "4. **Graphical Math Problems**: If the image represents a math problem graphically (e.g., triangles, "
        "shapes, or collision diagrams), analyze the problem and solve it. Return the answer as a list of "
        "one dictionary: {'expr': description of the problem, 'result': calculated answer}.\n\n"

        "5. **Abstract Concepts from Drawings**: If the image contains abstract or symbolic elements (e.g., "
        "drawings representing emotions, patriotism, or a famous historical figure), describe the concept. "
        "Return it as a dictionary with 'expr' as the explanation and 'result' as the abstract concept.\n\n"

        "6. **Object/Diagram Recognition**: If the image contains a hand-drawn diagram of a recognizable object (such as a tree, apple, or Captain America's shield), "
        "identify the object and provide a brief description. The description should include details about the object, its common uses, or its symbolism. "
        "For example:\n"
        "  - If a tree is drawn, return: {'expr': 'tree', 'result': 'A tree is a large plant that grows on land, providing shade, fruits, and shelter for animals.'}\n"
        "  - If an apple is drawn, return: {'expr': 'apple', 'result': 'An apple is a fruit, often associated with health and knowledge.'}\n"
        "  - If Captain America's shield is drawn, return: {'expr': 'Captain America\'s shield', 'result': 'Captain America\'s shield is a symbol of strength and protection.'}\n\n"

        "In addition, use the following user-defined variable dictionary for any variables in the image: "
        f"{dict_of_vars_str}. Ensure you follow the proper format with escape sequences for characters like \\f and \\n.\n"
        
        "Return the results as a properly quoted dictionary that can be parsed using Python's ast.literal_eval."
    )

    
    # Call the generative model to analyze the image
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    
    try:
        response = model.generate_content([prompt, img])
        response_text = response.text
    except Exception as e:
        print(f"Error in generating content from Gemini API: {e}")
        return []

    # Parse the response using ast.literal_eval to avoid code injection risks
    answers = []
    try:
        answers = ast.literal_eval(response_text)
    except (SyntaxError, ValueError) as e:
        print(f"Error in parsing response: {e}")
        return []

    # Ensure 'assign' is set correctly in each answer
    for answer in answers:
        answer['assign'] = answer.get('assign', False)

    return answers
