-- Deploy framethrower:framethrower_public.table.company_pro_groups to pg

begin;

  create table framethrower_public.company_pro_group(
    id uuid primary key default uuid_generate_v4(),
    company_id uuid not null references framethrower_public.company(id) on delete cascade,
    slug text not null,
    group_name text not null,
    description text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
    );


  create unique index company_group_name_company_id
  on framethrower_public.company_pro_group (group_name, company_id);


  create unique index company_group_slug_company_id
  on framethrower_public.company_pro_group (slug, company_id);

  grant select on table framethrower_public.company_pro_group to
    framethrower_user,
    framethrower_moderator,
    framethrower_admin;

commit;