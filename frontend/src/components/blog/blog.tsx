import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react';

// Defines the shape of the props expected by the Blog component.
export interface BlogProps {
  postName: string;  // Title of the blog post.
  components: ComponentData[];  // An array of ComponentData objects that describe the components to be rendered.
}

// Defines the shape of a component data object. This will be used to dynamically import and render a React component.
interface ComponentData {
  componentType: string;  // Name of the component to be rendered.
  props: { [key: string]: any };  // Props to be passed to the component.
}

// The Blog component. Takes a single prop: an object of type BlogProps.
const Blog: React.FC<{ data: BlogProps }> = ({ data }) => {
  // Sets up state to store a mapping of component names to their respective React component objects.
  // This is initialized as an empty object.
  const [componentMappings, setComponentMappings] = useState<{ [key: string]: React.LazyExoticComponent<ComponentType<any>> | null }>({});

  // useEffect hook that runs once when the component mounts, and also whenever 'data' or 'componentMappings' changes.
  useEffect(() => {
    // Loop over the array of component data objects passed to the Blog component.
    data.components.forEach(async (componentData) => {
      // If the current component hasn't already been imported and added to 'componentMappings'...
      if (!componentMappings[componentData.componentType]) {
        // Dynamically import the component, using the name specified in 'componentData.componentType'.
        const Component = lazy(() => import(`../${componentData.componentType}/${componentData.componentType}`));
        // Add the newly-imported component to the 'componentMappings' state.
        setComponentMappings(prevMappings => ({
          ...prevMappings,
          [componentData.componentType]: Component
        }));
      }
    });
  }, [data, componentMappings]);

  // Render the Blog component.
  return (
    <div>
      <h2>{data.postName}</h2>  // Render the title of the blog post.
      {/* Map over the 'components' array in the 'data' prop, rendering each component as specified in the 'componentMappings' state. */}
      {data.components.map((componentData, index) => {
        // Get the component object from 'componentMappings', using the name specified in 'componentData.componentType'.
        const Component = componentMappings[componentData.componentType];
        // If the component exists (i.e., it was successfully imported and added to 'componentMappings')...
        return Component ? (
          // Use React's Suspense component to handle loading state while the component is being lazily loaded.
          <Suspense key={index} fallback={<div>Loading...</div>}>
            {/* Render the component, spreading the 'props' object from 'componentData' as props. */}
            <Component {...componentData.props} />
          </Suspense>
        ) : null;  // If the component doesn't exist (i.e., it hasn't been imported yet), render nothing.
      })}
    </div>
  );
}


export default Blog;
