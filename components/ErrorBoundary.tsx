import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";

export default function ErrorBoundary(props: any) {
  const [hasError, setHasError] = useState<boolean>(false);
  function getDerivedStateFromError(error?: any) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  useEffect(() => {
    getDerivedStateFromError();
  }, []);

  // Check if the error is thrown
  if (hasError) {
    // You can render any custom fallback UI
    return (
      <Layout>
        <div className="d-flex justfify-content-center align-items-cenetr">
          <div>
            <h2>Oops, there is an error!</h2>
            <button type="button" onClick={() => setHasError(false)}>
              Try again?
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Return children components in case of no error

  return props.children;
}
