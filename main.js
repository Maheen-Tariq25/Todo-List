#! /usr/bin/env  node
import inquirer from "inquirer";
let todoList = [];
let while_condition = true;
while (while_condition === true) {
    let make_list = await inquirer.prompt([{
            name: "ans",
            type: "list",
            message: "Select an option",
            choices: ["Add", "Remove"]
        }]);
    if (make_list.ans === "Add") {
        let make_list2 = await inquirer.prompt({
            name: "ans",
            type: "input",
            message: "Write something to add in a list",
        });
        if (make_list !== "") {
            todoList.push(make_list2.ans);
            console.log(todoList);
        }
        else {
            console.log("Please write something to add in a list");
        }
    }
    else if (make_list.ans === "Remove") {
        let remove_item = await inquirer.prompt([{
                name: "ans",
                type: "list",
                message: "Select an option to remove",
                choices: todoList
            }]);
        let index_to_remove = todoList.indexOf(remove_item.ans);
        if (index_to_remove >= 0) {
            todoList.splice(index_to_remove, 1);
            console.log(`You removed ${remove_item.ans}`);
            console.log(todoList);
        }
    }
    let forConfirm = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "\nDo you want to continue",
        default: true
    });
    if (forConfirm.ans === false) {
        while_condition = false;
    }
}
console.log("\n Thank you for using todolist");
