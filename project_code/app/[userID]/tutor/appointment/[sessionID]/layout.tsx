// import { Metadata } from "next"
// import { Separator } from "@/components/ui/separator"
//
// export const metadata: Metadata = {
//     title: "Tutor appointment",
//     description: "",
// }
//
// interface SettingsLayoutProps {
//     children: React.ReactNode
// }
//
// export default function SettingsLayout({ children }: SettingsLayoutProps) {
//     return (
//         <main className="mt-10">
//             <div className="hidden space-y-6 p-10 pb-16 md:block">
//                 <div className="space-y-0.5 flex flex-col items-center">
//                     <h2 className="text-2xl font-bold tracking-tight">Tutor Appointment Details</h2>
//                     <p className="text-muted-foreground">
//                         Manage your appointment details.
//                     </p>
//                 </div>
//                 <Separator className="my-6" />
//                 <div className="flex flex-col justify-center space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
//                     <div className="flex-1 lg:max-w-2xl">{children}</div>
//                 </div>
//             </div>
//         </main>
//     )
// }
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
    title: "Tutor appointment",
    description: "",
}

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <main className="mt-10">
            {children}
        </main>
    )
}