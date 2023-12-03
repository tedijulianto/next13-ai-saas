import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApilimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApilimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApilimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApilimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApilimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApilimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userApilimit || userApilimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApilimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApilimit) {
    return 0;
  }

  return userApilimit.count;
};
