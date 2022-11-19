-- Deploy flipr:framethrower_public.table.alter.premium to pg

begin;

  alter table framethrower_public.premium add column company_id uuid  references framethrower_public.company(id) on delete cascade;
  alter table framethrower_public.premium add column stripe_customer_id uuid  references framethrower_private.stripe_customer(id) on delete cascade;
  alter table framethrower_public.premium add constraint company_or_customer_constraint check ((company_id is null) <> (stripe_customer_id is null));

commit;