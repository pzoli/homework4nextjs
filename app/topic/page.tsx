"use client";

import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Difficulty() {

    const { data: topicValues, status: dataFetchStatus, isLoading: isDataLoading } = useQuery({
        queryKey: ["topic"],
        queryFn: async () => {
            const res = await fetch(`/api/topic`, { cache: "no-store" });
            return res.json();
        }
    });

    return (
        <>
            <DataTable value={topicValues} loading={isDataLoading}>
                <Column field='name' header="Name"></Column>
            </DataTable>
            <Link href="/">Home</Link>
        </>
    )
}