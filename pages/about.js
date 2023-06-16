import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
    return new Promise((resolve, reject) => {
        fetch("https://good-teal-millipede-garb.cyclic.app/api/movies/573a13b9f29313caabd4de39")
            .then(res => res.json())
            .then(data => {
                resolve({ props: { staticPost: data } })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export default function About({ staticPost }) {
    return (
        <div>
            <PageHeader text="About the Developer : Huu Tinh Luu" />

            <Card>
                <Card.Body>
                    <p>
                        Hi, my name is Huu Tinh. I'm currently a 5th-semester-student of Seneca College. My favourite is playing games in my free time.
                        It&apos;s difficult to choose a favourite, but{' '}
                        <Link href="/movies/World War Z">
                            "World War Z"
                        </Link>{' '}
                        is one that I like. <br /><br />
                    </p>
                    <MovieDetails movie={staticPost} />
                </Card.Body>
            </Card>

        </div>
    );
}