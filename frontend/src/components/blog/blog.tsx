import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react';

export interface BlogProps {
  postName: string;  
  components: ComponentData[];
}

interface ComponentData {
  componentType: string;
  props: { [key: string]: any };
}

const Blog: React.FC<{ data: BlogProps }> = ({ data }) => {
  const [componentMappings, setComponentMappings] = useState<{ [key: string]: React.LazyExoticComponent<ComponentType<any>> | null }>({});

  useEffect(() => {
    // Import only the components needed for this blog.
    data.components.forEach(async (componentData) => {
      // Check if the component has already been imported and loaded.
      if (!componentMappings[componentData.componentType]) {
        const Component = lazy(() => import(`../${componentData.componentType}/${componentData.componentType}`));
        setComponentMappings(prevMappings => ({
          ...prevMappings,
          [componentData.componentType]: Component
        }));
      }
    });
  }, [data]);

  return (
    <div>
      <h2>{data.postName}</h2>
      {data.components.map((componentData, index) => {
        const Component = componentMappings[componentData.componentType];
        return Component ? (
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <Component {...componentData.props} />
          </Suspense>
        ) : <div>Loading...</div>; // Show loading div until the component is loaded.
      })}
    </div>
  );
}

export default Blog;
