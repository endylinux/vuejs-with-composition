# vuejs-with-composition
The Composition API is an addition to the language that was created to address the limitations of the Options API used in Vue 2. 

The creator of Vue described the Composition API as a reactive API coupled with the ability to register lifecycle hooks using globally imported functions.

The Composition API is exposing some of the internal functions, that Vue already uses, allowing us to use these functions directly in components.

## Better extensibility and organization
In Vue 2, components are organized using options such as data, mounted, methods, etc.
Because of this, logic isn't really grouped by feature, which can make it hard to read through a large and complex file. Readers would often have to scroll back and forth to follow what's going on. Another downside of this organization is that it made logic reuse difficult, as features are split up unintuitively in a component. 

The Composition API RFC includes this excellent diagram showing the flow of different concerns in the same component built with both the Options API and Composition API. Each color represents a different logical concern. As shown, using composition functions with the Composition API allows for better organization in components.
