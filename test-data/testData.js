// test-data/testData.js

module.exports = {

    login: {
        email: "aishwaryanellutla483@gmail.com",
        password: "Aishwarya@123"
    },

    taskBot: {
        name: "Test_TaskBot",
        description: "This is a test task bot",
        message: "Hello this is test message"
    },

    form: {
        name: "Form_Test",
        description: "This is a test form",

        firstTextBox: {
            label: "First Name",
            defaultValue: "John",
            min: "1",
            max: "20",
            hint: "Enter your first name"
        },

        secondTextBox: {
            label: "Last Name",
            defaultValue: "Doe",
            min: "1",
            max: "20",
            hint: "Enter your last name"
        }
    },

    rules: {
        rule1: "Rule1",
        rule2: "Rule2",
        rule3: "Rule3",

        condition: "Is not empty",
        action: "Set value",
        value: "10"
    }

};