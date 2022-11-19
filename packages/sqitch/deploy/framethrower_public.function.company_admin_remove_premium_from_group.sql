-- Deploy framethrower:framethrower_public.function.company_admin_remove_premium_from_group to pg
begin;

  create or replace function framethrower_public.company_admin_remove_premium_from_group(
    premium_id_ uuid
    )returns framethrower_public.company_group_premium as $$

    declare company_id_ uuid;
    declare group_premium_ framethrower_public.company_group_premium;
    declare premium_ framethrower_public.premium;

    begin
      select company_id
      from framethrower_public.company_admin_users
      where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid
      into company_id_;

      select *
      from framethrower_public.premium
      where premium.company_id = company_id_
      and premium.id = premium_id_
      into premium_;

      if company_id_ is null OR premium_ is null then
        return null;
      else
        delete from framethrower_public.company_group_premium where company_group_premium.premium_id = premium_.id
        returning * into group_premium_;
      end if;
      return group_premium_;
    end;
  $$ language plpgsql security definer;


grant execute on function framethrower_public.company_admin_remove_premium_from_group(uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;