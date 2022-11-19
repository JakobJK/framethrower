-- Deploy flipr:framethrower_public.view.v_pro_membership to pg

begin;

  create view framethrower_public.v_pro_membership as
    select
      premium.id,
      premium.profile_id,
      premium.created_at,
      premium.updated_at,
      profile.username,
      company.name company_name,
      company.logo,
      company.link,
      built_in_feedback,
      purchased_feedback,
      premium_definition.name premium_name,
      premium_definition.daily_posts,
      premium_definition.max_frames,
      premium_definition.concurrent_projects,
      company_pro_group.group_name,
      company_pro_group.id company_pro_group_id,
      status
    from framethrower_public.premium
    join framethrower_public.profile ON profile.id = premium.profile_id
    join framethrower_public.company ON company.id = premium.company_id
    join framethrower_public.premium_definition ON premium_definition.id = premium.premium_definition_id
    left join framethrower_public.company_group_premium ON company_group_premium.premium_id = premium.id
    left join framethrower_public.company_pro_group ON company_group_premium.company_group_id = company_pro_group.id
    where premium.profile_id = current_setting('jwt.claims.id', true)::uuid;

  comment on view framethrower_public.v_pro_membership is E'@foreignKey (company_pro_group_id) references framethrower_public.company_pro_group';
  grant select on framethrower_public.v_pro_membership to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
