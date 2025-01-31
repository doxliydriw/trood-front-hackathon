import { lazy, Suspense } from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';

// Lazy load components
const Root = lazy(() => import('app/layout/root/ui/Root'));
const Projects = lazy(() => import('pages/Projects'));
const CreatingProject = lazy(() => import('pages/CreatingProject'));
const EditProject = lazy(() => import('pages/EditProject'));


// Define routes using JSX instead of RouteObject
export const routes = createRoutesFromElements(
  <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Root /></Suspense>}>
    <Route path="projects" element={<Projects />} />
    <Route path="creating_project" element={<CreatingProject />} />
    <Route path="edit_project/:id" element={<EditProject />} />
  </Route>
);
