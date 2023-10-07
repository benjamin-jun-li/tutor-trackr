import {Separator} from "@/components/ui/separator";
import {TutorProfileForm} from "@/components/form/TutorProfileForm";

const TutProfile = () => {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <TutorProfileForm />
        </div>
    )
}
export default TutProfile