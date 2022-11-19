-- Deploy framethrower:framethrower_public.table.company_group_premium to pg

begin;

  create table framethrower_public.company_group_premium(
    id uuid primary key not null default uuid_generate_v4(),
    premium_id uuid not null unique references framethrower_public.premium(id) on delete cascade,
    company_group_id uuid not null references framethrower_public.company_pro_group(id) on delete cascade
  );


grant select on table framethrower_public.company_admin_users to framethrower_user,
    framethrower_moderator, framethrower_admin;

commit;
