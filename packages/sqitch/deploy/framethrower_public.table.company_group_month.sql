-- Deploy framethrower:framethrower_public.table.company_group_month_settings to pg

begin;

   create table framethrower_public.company_group_month(
    id uuid primary key not null default uuid_generate_v4(),
    group_id uuid not null references framethrower_public.company_pro_group(id) on delete cascade,
    month integer not null,
    year integer not null,
    amount_feedbacks integer not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

  create unique index company_group_month_year
  on framethrower_public.company_group_month (month, year, group_id);

  grant select on table framethrower_public.company_group_month to framethrower_user, framethrower_moderator, framethrower_admin;

commit;