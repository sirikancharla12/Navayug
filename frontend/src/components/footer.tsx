import ConnectButton from "./connectButton";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
            <img
                src="/navayug.png"
                alt="Navayug Logo"
                className="w-20 h-20 object-contain filter brightness-0"
            />
            <p className="mt-4 text-sm">
                © {new Date().getFullYear()} Navayug. All rights reserved.
            </p>
            <ConnectButton label="LET'S CONNECT" to="/" />
            </div>
        </div>
        </footer>
    );
}