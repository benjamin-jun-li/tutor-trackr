import {NextApiRequest} from "next";

const handler = async (req:NextApiRequest, res: any) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed"})
    }
    try {
        const { content } = req.body;
        const { channelId } = req.query;
        if (!channelId) {
            return res.status(400).json({message: "missing channel ID"})
        }
        if (!content) {
            return res.status(400).json({message: "missing content"})
        }
        //TODO use prisma to find channel
    } catch (error) {
        console.log("[MESSAGES_POST]");
        return res.status(500).json({ message: "internal error"})
    }
}

export default handler