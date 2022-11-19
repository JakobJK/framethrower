-- Deploy flipr:framethrower_public.view.v_company_admin to pg

begin;

  create view framethrower_public.v_company_admin as
    select
    company.id,
    company.name,
    name_url_safe,
    address,
    link,
    logo,
    description,
    company.created_at,
    company.updated_at,
    (select count(*) from framethrower_public.premium where company_id = company.id) as members,
    (select count(*) from framethrower_public.company_pro_group where company_id = company.id) as groups
    from
    framethrower_public.company
    left join framethrower_public.company_admin_users on company_admin_users.company_id = company.id
    where company_admin_users.profile_id = current_setting('jwt.claims.id')::uuid;
    comment on view framethrower_public.v_company_admin is E'@foreignKey (id) references framethrower_public.company (id)';
    grant select on framethrower_public.v_company_admin to framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;

commit;