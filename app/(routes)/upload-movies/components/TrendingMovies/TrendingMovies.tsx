"use client"

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { useToast } from "@/hooks/use-toast";

import { Button }from "@/components/ui/button"

import { trendingMovies } from "./TrendingMovies.data";


export function TrendingMovies() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const uploadTrendingMovies = async () => {
        setIsLoading(true);
        try {
            await axios.post("/api/create-trending-movies", {
                movies:trendingMovies, 
            });
            toast({ title: "Movies uploaded successfully"});
            
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
    <div className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300">
        <h1 className="text-xl font-bold mb-4">Upload trending movies</h1>
        <Button
        className="w-full"
        onClick={uploadTrendingMovies}
        variant="secondary"
        disabled={isLoading}
        >
            Upload trending movies
            <Upload className="w-4 h-4 ml-2" />
        </Button>
        </div>
        );
}