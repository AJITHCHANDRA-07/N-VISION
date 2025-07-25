
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Edit3, Save, BookOpen, Target, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "",
    currentClass: "12th",
    stream: "Science",
    schoolType: "Government",
    marks10th: "85",
    marks12th: "",
    interestedFields: ["Engineering", "Medicine"],
    careerGoal: "",
    currentProgress: 65
  });

  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully!"
    });
  };

  const achievements = [
    { title: "Academic Excellence", description: "Maintained 85% in Class 10", icon: "🏆" },
    { title: "Science Stream", description: "Pursuing Science with PCM", icon: "🔬" },
    { title: "Government School", description: "Eligible for fee reimbursement", icon: "🏛️" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Student Profile</h2>
        <Button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center space-x-2"
        >
          {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
          <span>{isEditing ? "Save" : "Edit"}</span>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={profile.name} 
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  value={profile.email} 
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  value={profile.phone} 
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <Label htmlFor="currentClass">Current Class</Label>
                <Select value={profile.currentClass} onValueChange={(value) => setProfile({...profile, currentClass: value})} disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">Class 10th</SelectItem>
                    <SelectItem value="11th">Class 11th</SelectItem>
                    <SelectItem value="12th">Class 12th</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="stream">Stream</Label>
                <Select value={profile.stream} onValueChange={(value) => setProfile({...profile, stream: value})} disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Commerce">Commerce</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="schoolType">School Type</Label>
                <Select value={profile.schoolType} onValueChange={(value) => setProfile({...profile, schoolType: value})} disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Government">Government</SelectItem>
                    <SelectItem value="Private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="marks10th">Class 10th Marks (%)</Label>
                <Input 
                  id="marks10th" 
                  value={profile.marks10th} 
                  onChange={(e) => setProfile({...profile, marks10th: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="marks12th">Class 12th Marks (%) - Optional</Label>
                <Input 
                  id="marks12th" 
                  value={profile.marks12th} 
                  onChange={(e) => setProfile({...profile, marks12th: e.target.value})}
                  disabled={!isEditing}
                  placeholder="Enter if completed"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="careerGoal">Career Goal</Label>
              <Textarea 
                id="careerGoal" 
                value={profile.careerGoal} 
                onChange={(e) => setProfile({...profile, careerGoal: e.target.value})}
                disabled={!isEditing}
                placeholder="Describe your career aspirations..."
                className="h-20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Profile Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Profile Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Completion</span>
                    <span>{profile.currentProgress}%</span>
                  </div>
                  <Progress value={profile.currentProgress} className="h-2" />
                </div>
                <div className="text-sm text-gray-600">
                  Complete your profile to get better course recommendations
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Interested Fields</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.interestedFields.map((field, index) => (
                  <Badge key={index} variant="secondary">
                    {field}
                  </Badge>
                ))}
                {isEditing && (
                  <Badge variant="outline" className="cursor-pointer">
                    + Add Field
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
