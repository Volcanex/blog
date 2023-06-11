import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


// Component used when a module doesn't exist
const ErrorComponent: React.FC<{ errorModule: string }> = ({ errorModule }) => {
    return (
      <div>
        <h2>Error: Module {errorModule} doesn't exist.</h2>
      </div>
    );
  };

// Defines the types for the properties of a blog post
export interface BlogProps {
  postName: string;  
  components: ComponentData[];
}

// Defines the types for each component in a blog post
interface ComponentData {
  componentType: string;
  props: { [key: string]: any };
}

// Blog is a React Functional Component taking a data prop of type BlogProps
const Blog: React.FC<{ data: BlogProps }> = ({ data }) => {
  // Define state for the component mappings, initializing it as an empty object
  const [componentMappings, setComponentMappings] = useState<{ [key: string]: React.LazyExoticComponent<ComponentType<any>> | null }>({});

  // An effect hook that runs when the 'data' prop changes
  useEffect(() => {
    // Import only the components needed for this blog.
    data.components.forEach(async (componentData) => {
      // Check if the component has already been imported and loaded.
      if (!componentMappings[componentData.componentType]) {
        // Dynamically import the component needed for this part of the blog
        const Component = lazy(() => 
          import(`../${componentData.componentType}/${componentData.componentType}`)
            .catch(() => ({ default: () => <ErrorComponent errorModule={componentData.componentType} /> }))
        );
        // Update state with the new component
        setComponentMappings(prevMappings => ({
          ...prevMappings,  // copy all the old mappings
          [componentData.componentType]: Component  // add the new component mapping
        }));
      }
    });
  }, [data]);  // Dependency array for useEffect, this effect runs when 'data' changes

  // If data, postName or components are not provided, display a message indicating no valid blog data was provided
  if (!data || !data.postName || !data.components) {
    return <h2>No valid blog data provided</h2>;
  }

  // Render the blog
  return (
    <div>
      <h2>{data.postName}</h2>
      {data.components.map((componentData, index) => {
    const Component = componentMappings[componentData.componentType];

    return (
        <ErrorBoundary key={index}>
        {Component ? (
            <Suspense fallback={<div>Loading...</div>}>
            <Component {...componentData.props} />
            </Suspense>
        ) : <div>Component not found: {componentData.componentType}</div>}
        </ErrorBoundary>
    );
    })}
    </div>
  );
}

export default Blog;
