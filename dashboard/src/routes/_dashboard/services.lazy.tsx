import {
    Page,
    Loading,
} from "@marzneshin/components";
import { ServicesTable } from "@marzneshin/features/services";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { type FC, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { SudoRoute } from "@marzneshin/features/sudo-routes";

export const ServicesPage: FC = () => {
    const { t } = useTranslation();
    return (
        <Page title={t("services")}>
            <ServicesTable />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </Page>
    );
};

export const Route = createFileRoute("/_dashboard/services")({
    component: () => <SudoRoute> <ServicesPage /> </SudoRoute>
});
