import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {FC} from "react";

interface ProfileTableProps {
    data: any,
    className: string,
}

const ProfileTable:FC<ProfileTableProps> = ({ data, className }) => {
    return (
        <div className={className}>
            {data.length !== 0 ? (
                <Table >
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <h2 className="text-xl font-medium">Cannot view profiles because no student in this course</h2>
            )}

        </div>
    )
}

export default ProfileTable