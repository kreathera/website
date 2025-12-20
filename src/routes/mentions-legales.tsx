import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemSeparator, ItemTitle } from "@/components/ui/item";
import { readLegaleNotice } from "@/functions/client";
import { Button } from "@/components/ui/button";

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createFileRoute("/mentions-legales")({
  component: RouteComponent,
});

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
function RouteComponent() {
  const { legaleNotice, privacyPolicy } = readLegaleNotice();

  return (
    <div className="mt-20 flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-normal text-2xl uppercase">Mentions légales</CardTitle>
        </CardHeader>
        <CardContent>
          <ItemGroup>
          {legaleNotice.items.map(({ content, id, title }, index) => (
            <Fragment key={id}>
              {index > 0 && <ItemSeparator />}
              <Item>
                <ItemContent>
                  <ItemTitle className="font-heading font-normal text-lg uppercase">
                    <Badge className="size-5 rounded-full px-1" variant="secondary">
                      {index + 1}
                    </Badge>
                     {title}
                  </ItemTitle>
                  <article className="max-w-none text-sm">{content}</article>
                </ItemContent>
              </Item>
            </Fragment>
          ))}
          </ItemGroup>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-heading font-normal text-2xl uppercase">Politique de confidentialité</CardTitle>
        </CardHeader>
        <CardContent>
          {privacyPolicy.items.map(({ content, id, title }, index) => (
            <Fragment key={id}>
              {index > 0 && <ItemSeparator />}
              <Item>
                <ItemContent>
                  <ItemTitle>
                    <span className="flex items-center gap-1 font-heading font-normal text-lg uppercase">
                      <Badge className="size-5 rounded-full px-1" variant="secondary">
                        {index + 1}
                      </Badge>
                      {title}
                    </span>
                  </ItemTitle>
                  <article className="max-w-none text-sm">{content}</article>
                </ItemContent>
              </Item>
            </Fragment>
          ))}
        </CardContent>
        <CardFooter>
          <Button asChild><Link to="/"><span className="icon-[lucide--home]"/>Retour à l'accueil</Link></Button>
        </CardFooter>
      </Card>
    </div>
  );
}
