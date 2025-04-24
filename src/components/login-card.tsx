"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  container,
  card,
  cardHeader,
  cardAvatar,
  cardTitle,
  cardDesc,
  cardContent,
  actionButton,
  smallText,
} from "@/components/ui/cva";
import { LucideUser } from "lucide-react";

export function LoginCard() {
  return (
    <div className={container()}>
      <Card className={card()}>
        <CardHeader className={cardHeader()}>
          <Avatar className={cardAvatar()}>
            <AvatarImage src="/logo.png" alt="Logo" />
            <AvatarFallback>
              <LucideUser className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className={cardTitle()}>Đăng nhập vào ZangTee HRM</CardTitle>
          <p className={cardDesc()}>Quản lý nhân sự hiện đại, an toàn và tiện lợi.</p>
        </CardHeader>
        <CardContent className={cardContent()}>
          <Button
            variant="outline"
            className={actionButton()}
            onClick={() => signIn("google")}
          >
            <FcGoogle size={22} />
            Đăng nhập với Google
          </Button>
          <Separator className="my-2" />
          <p className={smallText()}>
            Bằng việc đăng nhập, bạn đồng ý với <a href="#" className="underline">Điều khoản dịch vụ</a> và <a href="#" className="underline">Chính sách bảo mật</a> của chúng tôi.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
