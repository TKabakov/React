# Specifications

1. Header - external links
    - `nav` element should have external social media links  on the left side of the page
    - links shoild be stack horizontally with `HStack`
    - links should be a `a` tag with a `href` attribute
    - `a` tag should have as children a `FontAwesomeIcon`
    - `FontAwesomeIcon` component should take 2 props: `icon` and `size`.

2. Header - internal links
    - links to "Projects" Section and to "Contact Me" Section
    - when click on link the url should show the corresponding section
    - the click should scroll with smooth animation
      - avoid any key related warnings when opening the console.

3. Landing Section
    - avatar
    - greeting
    - a brief role description
    - no personal data.

4. `Projects` Section
    - implement the UI for the card in te `Card.js`
    - use some or all of the following components:
        =HStack
        =VStack
        =Image
        =Heading
        =Text
    - for right arrow use `<FontAwesomeIcon icon={faArrowRight} size="1x" />`
    - avoid any key related warnings when opening the console.

5. `Contact Me` Section
    - pass an object with 3 properties:`initialValues`, `onSubmit` and `validationSchema`
    - the `initialValues` object should have the following fields:
        = `firstName`: The name of the user
        = `email`: The email of the user
        = `type`: 'hireMe' | 'openSource' | 'other'
        = `comment`: A message from the user
    - the `onSubmit` function should perform an API call by using the `submit` helper from `useSubmit` hook
    - the `validationSchema` should be a Yup schema that validates the form fields
    - The validation rules are as follows:
        = `firstName`: required field. Otherwise, the error message should be "Required"
        = `email`: required field and a valid email. If empty, the error message should be "Required". If not a valid email, the error message should be "Invalid email address"
        = `type`: Optional field
        = `comment`: required field and with a minimum of 25 characters. If empty, the error message should be "Required". If less than 25 characters, the error message should be "Must be at least 25 characters"
