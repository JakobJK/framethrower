-- deploy flipr:framethrower_public.table.privilege to pg

begin;

  create table framethrower_public.premium_definition(
    id uuid primary key not null default uuid_generate_v4(),
    name framethrower_public.profile_premium not null,
    max_frames integer not null,
    daily_posts integer not null,
    concurrent_projects integer not null,
    stripe_price_id text not null,
    price integer not null
  );

  grant select on table framethrower_public.premium_definition
  to framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_admin;

  insert into framethrower_public.premium_definition
  (name, max_frames, daily_posts, concurrent_projects, stripe_price_id, price)
  values
  ('default', 250, 1, 5, 'TO BE CHANGED', 0),
  ('pro', 750, 4, 15, 'TO BE CHANGED', 5500);

commit;