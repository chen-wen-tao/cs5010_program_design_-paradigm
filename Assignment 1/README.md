# Assignment 1

To execute the code

1. Open up node in terminal under the Assignment 1 folder
2. Type in "const { default: PromptsManager } = await import("./prompt_manager.js");" as command to import PromptsManager
3. Then create a new PromptsManager by typing in command "pm = new PromptsManager();"
4. Now you can create interactions using either "recordPrompt", "record_timePrompt", or "record_dallePrompt" based on the interaction type you want to add
5. I also include the ability to change a existing prompt by using "change_prompt" method
6. Lastly, you can view all the existing interactions stored using "showAllInteractions" method