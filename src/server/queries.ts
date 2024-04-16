import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages(page: number = 1, limit: number = 10) {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
        limit: limit,
        offset: (page - 1) * limit,
    });

    return images;
}

export async function getImage(id: number) {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const image = await db.query.images.findFirst({
        where: (model, { eq, and }) => and(eq(model.id, id), eq(model.userId, user.userId)),
    })

    if (!image) throw new Error("Image not found");

    return image;
}

export async function deleteImage(id: number) {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    await db.delete(images)
        .where(and(eq(images.id, id), eq(images.userId, user.userId)))

    analyticsServerClient.capture({
        distinctId: user.userId,
        event: "delete image",
        properties: {
            imageId: id,
        },
    });

    redirect('/');
}