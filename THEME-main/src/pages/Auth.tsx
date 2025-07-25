import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Heart, Chrome } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access courses, scholarships, and career guidance",
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-100 border-blue-300"
    },
    {
      id: "mentor",
      title: "Mentor",
      description: "Guide students and share your expertise",
      icon: <Users className="h-8 w-8 text-green-600" />,
      color: "bg-green-100 border-green-300"
    },
    {
      id: "parent",
      title: "Parent",
      description: "Support your child's educational journey",
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100 border-purple-300"
    }
  ];

  const handleGoogleSignIn = () => {
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "Choose whether you're a student, mentor, or parent",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful login
    localStorage.setItem("userRole", selectedRole);
    localStorage.setItem("isAuthenticated", "true");
    
    toast({
      title: "Welcome to N-VISION!",
      description: `Signed in successfully as ${selectedRole}`
    });

    // Navigate to role-specific dashboard
    if (selectedRole === "student" || selectedRole === "parent") {
      navigate(`/${selectedRole}-dashboard`);
    } else if (selectedRole === "mentor") {
      // For mentor, navigate to mentor dashboard or a placeholder
      navigate(`/mentor-dashboard`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">N-VISIONe</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Our Platform</h2>
          <p className="text-gray-600">Choose your role to get started with personalized content</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => (
            <Card 
              key={role.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedRole === role.id 
                  ? `${role.color} border-2 shadow-lg` 
                  : "border hover:border-gray-300"
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  {role.icon}
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                {selectedRole === role.id && (
                  <Badge variant="secondary" className="w-fit mx-auto">
                    Selected
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {role.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleGoogleSignIn}
            size="lg"
            className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-8 py-3"
            disabled={!selectedRole}
          >
            <Chrome className="h-5 w-5 mr-3" />
            Sign in with Google
          </Button>
          
          {selectedRole && (
            <p className="text-sm text-gray-600 mt-4">
              You'll be signed in as a <span className="font-semibold">{selectedRole}</span>
            </p>
          )}
        </div>

        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
