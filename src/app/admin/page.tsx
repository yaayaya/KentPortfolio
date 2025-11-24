"use client";

import { useEffect } from "react";

export default function AdminPage() {
    useEffect(() => {
        // Redirect to the static admin HTML file
        window.location.href = "/admin/index.html";
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Loading Tina CMS...</p>
        </div>
    );
}
