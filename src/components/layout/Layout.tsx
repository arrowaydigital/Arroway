import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { Outlet, useLocation } from "react-router-dom";

export function Layout() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <PageTransition key={location.pathname}>
                    <main>
                        <Outlet />
                    </main>
                </PageTransition>
            </div>
            <Footer />
        </div>
    );
}
