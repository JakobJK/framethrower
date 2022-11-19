-- Deploy framethrower:framethrower_public.function.company_admin_add_premium_to_group to pg

begin;

  create or replace function framethrower_public.company_admin_add_premium_to_group(
    group_id_ uuid,
    premium_id_ uuid
    )returns framethrower_public.company_group_premium as $$
    declare company_id_ uuid;
    declare group_premium_ framethrower_public.company_group_premium;
    declare check_group_id_ uuid;
    declare premium_ framethrower_public.premium;
    begin
      select company_id from framethrower_public.company_admin_users where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid into company_id_;

      select * from framethrower_public.premium where premium.company_id = company_id_ and premium.id = premium_id_ into premium_;
      select id from framethrower_public.company_pro_group where company_id = company_id_ and company_pro_group.id = group_id_ into check_group_id_;

      if company_id_ is null OR premium_ is null or check_group_id_ is null then
        return null;
      else
        insert into framethrower_public.company_group_premium (company_group_id, premium_id) values (group_id_, premium_.id)
        on conflict (premium_id)
        do update set company_group_id = group_id_
          where company_group_premium.premium_id = premium_.id
          returning * into group_premium_;
        return group_premium_;
      end if;
    end;
  $$ language plpgsql strict security definer;


grant execute on function framethrower_public.company_admin_add_premium_to_group(uuid, uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;