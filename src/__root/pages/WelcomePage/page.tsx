import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ArrowRight, Star, Gift } from "lucide-react";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <section className="text-center max-w-4xl mb-24 z-10">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Welcome to ShopEase
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Your destination for exclusive finds and unbeatable deals.
        </p>
        <Button
          className="px-10 py-4 text-lg bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition rounded-full cursor-pointer"
          onClick={() => navigate("/auth")}
        >
          Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl z-10">
        <Card className="hover:scale-105 transition-transform cursor-pointer shadow-lg border-0 bg-white/10 backdrop-blur-xl rounded-2xl">
          <CardContent className="flex flex-col items-center p-10 text-white">
            <ShoppingCart className="w-16 h-16 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Finds</h3>
            <p className="text-center text-sm leading-relaxed">
              Discover the hottest new arrivals just in store.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:scale-105 transition-transform cursor-pointer shadow-lg border-0 bg-white/10 backdrop-blur-xl rounded-2xl">
          <CardContent className="flex flex-col items-center p-10 text-white">
            <Star className="w-16 h-16 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p className="text-center text-sm leading-relaxed">
              Customer favorites that truly shine.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:scale-105 transition-transform cursor-pointer shadow-lg border-0 bg-white/10 backdrop-blur-xl rounded-2xl">
          <CardContent className="flex flex-col items-center p-10 text-white">
            <Gift className="w-16 h-16 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hot Deals</h3>
            <p className="text-center text-sm leading-relaxed">
              Amazing discounts and limited-time offers.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WelcomePage;
