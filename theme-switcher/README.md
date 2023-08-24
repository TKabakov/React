 One of the most common use cases for Context is to define a theme for your application. In this exercise, you created a light-dark theme switcher.
 Step 1. A new context object is created using createContext:
 ![Alt text](image.png)
 Step 2. A new piece of local state is defined (inside ThemeProvider):
 ![Alt text](image-1.png)
 Step 3. The ThemeCOntext.Provider render and wrap the children it the return statement:
 ![Alt text](image-2.png)
 Step 4. The value prop object of ThemeContext.Provider is recalled with two values - theme and toggleTheme. theme is the ligth-dark string value, whereas toggleTheme is a function that toggles the theme from ligth to dark and vise versa:
 