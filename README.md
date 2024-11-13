**Updated**



#### 1.Common Components - All Stylesheets available in Common.css

### Device
Device is a configuration object which holds different screen types. The break points in pixels are setup to determine when to switch resonpsiveness of the components. We currently have breakpoints for

 +  Mobile - small, medium and large

 +  Tablets - using standard iPad sizing

 +  Desktop - laptop medium (15" and below), laptop large(17"), desktop(17.5" and above)

### Page
Page component is simply a styled container div which uses the Device configuration object and styled-components library to resize itself according to screensize. Currently there are no required props.

Basic Usage 
```JSX
    <Page>
    All content goes here...
    </Page>
```

### Button  
Button component is used multiple times through out the project eg. for -  Signup, Signin, SMS verification, saving user altered settings. They are also used for adding menu items to the cart, removing menuitems and so on.
There are three types a button click is handled - 

+ submit

+ button

+ reset 
Basic usage
```JSX
    <Button name="continue" value="Continue" type="submit" onClick={this.handOnClick} />
```

Use submit handle form submit events. Other two types according to the functionality. All the props are required.

Styles -  The button default uses the standard Feast color type. It will be available in atleast two different sizes - medium and large. 
    
### TabList and Tab  
TabList component is a collection of Tab components. Tab component is imported into TabList component. It is currently used in Restaurant home page to differentiate between Menu and Offers as well as under Menu for multiple menu sections according to menu categories for the given restaurant eg. Soups, Main Course, Dessert etc.

Basic Usage
```JSX
    <TabList>
    <div label="Menu">
    Menu components go here...
    </div>
    <div label="Offer">
    Offer components go here...
    </div>
    </TabList>
``` 
The divs are used as containers for <Tab> component. Label is a required property to distinguish tabs. There has to be more than one <div> for the <Tab> to be populated in <TabList>

Styles - <Tabs> and <TabsList> are both styled independently. Their stylesheets available and will be responsive to multiple device sizes soon. Styles are in standard Feast color scheme.

### InputBox  
InputBox is a reusable component used throughout the application for getting the user input such as email, password,feedback etc. It supports multiple types including - 

+ email

+ password

+ telephone

+ text

+ number

It is currently used in Authentication pages such as Login, SignUp, Settings. 

Basic Usage
```JSX
    <InputBox value ="password" type="password" onChange=handleOnChange()/>
```
All the properties stated above are required. The styles are available in standard Feast color scheme. It'll be available in at least two sizes, small and medium.

### Card and CardBody

Cards are a collection of text based components on top of a background image container. Card is composed of CardBody which holds these components. CardBody component is required for Card component to be active. Cards are used for displaying menu items on Menu section of Restaurant page and Menu Item page where the detailed description of selected menu item is given. The data to be displayed is passed through props. Following are the props which are required to be rendered onto CardBody - 

+ title - menu item title

+ price - price of the menu item

+ image - image of the menu item

+ taste - taste profile of menu item e.g.- spicy, sour etc.

+ description - description about the menu item.

Basic Usage - Card
```JSX
    <Card 
    title={this.props.details.title} 
    price={this.props.details.price} 
    taste={this.props.details.taste} 
    image={this.props.details.image}
    description={this.props.details.description} />
```
>In the future these will be reused
>with different props for Offers for
>given restaurant. Updates will be
>issued soon.

Styles are available in the stylesheet. The individual components which make up the CardBody such as title, price etc. are styled independently.

### RadioButtonGroup
RadioButtonGroup is a container containing radio buttons. Radio buttons are used to provide more option on the menu item for the user. E.g- main options such as fish, chicken, vegetables etc.
AND/OR side options such as soda, extra cheese etc.The component is highly reusable and can be used for other options such as for payment processing or delivery form as well in the future. There are only two properties which are required -

* type - string

* data - array 

Basic Usage 
```JSX
    <RadioButtonGroup
    type="addons"
    data=["soda","salsa","chips"]
    />
```

Styles - The standard theme of radio buttons use Feast color scheme as stated in the stylesheet. 


### Greetings
Greetings component is used on the search page to greet users according to the time of the day and suggest meal options such as dinner, breakfast or lunch. 
>Currently, we're targetting just the above basic functionality, hence the greetings messages will be hardcoded into the component itself. However, in the future, we expect this to evolve into a highly reusable component Some usecases -

>+ According to weather, suggest food. E.g. - it's raining outside, stay warm and dry at "X" restaurant which is offering 5% off on hot coffee for next 4 hours.

>+ According to location, suggest food. E.g. -  hey, try Bronzeville's famous "X" pizza at "Y" restaurant.

>+ According to location and event. E.g. - Enjoy football game at "X", "X"restaurant is offering discount. They'll further offer "Y" if your favorite team wins.

Basic Usage - Currently, the greetings are hardcoded. Just import the component and use.
````JSX
    <Greetings />
````

Styles - The standard font of Feast and color scheme as stated in the stylesheet. 