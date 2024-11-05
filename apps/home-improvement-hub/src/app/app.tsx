import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout, Ui } from '@home-improvement-hub/ui';
import { FeatureReviews } from '@home-improvement-hub/feature-reviews';
import { FeatureAgents } from '@home-improvement-hub/feature-agents';
import { FeatureServices } from '@home-improvement-hub/feature-services';
import { FeatureBookings } from '@home-improvement-hub/feature-bookings';

export function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route
          element={
              <Layout />
          }
        >
          <Route index element={<Navigate replace to="services" />} />
          <Route path="services" element={<FeatureServices />} />
          <Route path="agents" element={<FeatureAgents/>} />
          <Route path="reviews" element={<FeatureReviews />} />
          <Route path="bookings" element={<FeatureBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>



)
}

export default App;
