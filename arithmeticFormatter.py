def arithmetic_arranger(problems, show_answers=False):

    if len(problems) > 5:
        return "Error: Too many problems."

    first_operands = []
    second_operands = []
    operators = []
    results = []

    for problem in problems:
        parts = problem.split()

        if parts[1] not in ["+", "-"]:
            return "Error: Operator must be '+' or '-'."

        if not (parts[0].isdigit() and parts[2].isdigit()):
            return "Error: Numbers must only contain digits."

        if len(parts[0]) > 4 or len(parts[2]) > 4:
            return "Error: Numbers cannot be more than four digits."

        first_operands.append(parts[0])
        operators.append(parts[1])
        second_operands.append(parts[2])

        if show_answers:
            if parts[1] == "+":
                result = str(int(parts[0]) + int(parts[2]))
            else:
                result = str(int(parts[0]) - int(parts[2]))
            results.append(result)

    first_line = ""
    second_line = ""
    dash_line = ""
    result_line = ""

    for i in range(len(problems)):
        max_len = max(len(first_operands[i]), len(second_operands[i])) + 2
        first_line += first_operands[i].rjust(max_len)
        second_line += operators[i] + second_operands[i].rjust(max_len - 1)
        dash_line += "-" * max_len
        if show_answers:
            result_line += results[i].rjust(max_len)

        if i < len(problems) - 1:
            first_line += "    "
            second_line += "    "
            dash_line += "    "
            if show_answers:
                result_line += "    "

    if show_answers:
        arranged_problems = first_line + "\n" + second_line + "\n" + dash_line + "\n" + result_line
    else:
        arranged_problems = first_line + "\n" + second_line + "\n" + dash_line

    return arranged_problems

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')
