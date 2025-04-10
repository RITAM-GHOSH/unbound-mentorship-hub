
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
        <FileSearch size={80} className="text-gray-400 mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-center">404</h1>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Button className="gtm-btn-primary" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/mentors">Find Mentors</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
