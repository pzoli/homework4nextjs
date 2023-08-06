"use client";

import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Difficulty() {

    const { data: difficultyValues, status: dataFetchStatus, isLoading: isDataLoading } = useQuery({
        queryKey: ["difficulty"],
        queryFn: async () => {
            const res = await fetch(`/api/difficulty`);
            return res.json();
        }
    });

    return (
        <>
            <DataTable value={difficultyValues} loading={isDataLoading}>
                <Column field='name' header="Name"></Column>
            </DataTable>
            <Link href="/">Home</Link>
        </>
    )
}