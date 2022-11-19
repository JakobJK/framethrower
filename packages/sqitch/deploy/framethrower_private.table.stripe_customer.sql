-- Deploy flipr:framethrower_private.table.stripe_customer to pg

begin;
  create table framethrower_private.stripe_customer(
    id uuid primary key not null default uuid_generate_v4(),
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    customer_id text not null,
    subscription_id text,
    cancel_at_period_end boolean not null default false,
    current_period_end integer
  );
commit;
