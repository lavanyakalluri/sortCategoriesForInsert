# sortCategoriesForInsert
Function will take a JSON object representing the categories from the product database and provide as output a list of dictionaries sorted in the proper insertion order. There may be more than one optimal ordering of the categories, but you only have to provide an optimal ordering.
You can assume: - The input will always be solvable (there will be no missing parents) - The input will always be valid JSON in the format of the example below, with no additional data - There may be more than one root category (a category with no parents)
This is a formatted JSON sample input, with one sample child (with both a parent and a child), one child with no children, and sample parent (with no parent)
