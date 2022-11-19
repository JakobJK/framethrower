-- Deploy framethrower:framethrower_public.function.company_delete_group to pg

begin;

  create or replace function framethrower_public.company_delete_group(
    group_id_ uuid
    )returns framethrower_public.company_pro_group as $$
    declare company_id_ uuid;
    declare group_ framethrower_public.company_pro_group;
    begin
      select company_id from framethrower_public.company_admin_users where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid into company_id_;
      if company_id_ is null then
        return null;
      else
        delete from framethrower_public.company_pro_group where company_id = company_id_ and id = group_id_ returning * into group_;
        return group_;
      end if;
    end;
  $$ language plpgsql strict security definer;


grant execute on function framethrower_public.company_delete_group(uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;