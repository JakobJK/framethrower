-- Deploy framethrower:framethrower_public.function.company_admin_remove_month_from_group to pg

begin;

  create or replace function framethrower_public.company_admin_remove_month_from_group(
    month_id_ uuid
    )returns framethrower_public.company_group_month as $$
    declare company_id_ uuid;
    declare deleted_month_ framethrower_public.company_group_month;

    begin
      select company_id from framethrower_public.company_admin_users
      where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid
      into company_id_;

      delete from framethrower_public.company_group_month
      using framethrower_public.company_pro_group
      where company_group_month.id = month_id_
      and company_pro_group.company_id = company_id_
      returning * into deleted_month_;
      return deleted_month_;
    end;
  $$ language plpgsql strict security definer;


grant execute on function framethrower_public.company_admin_remove_month_from_group(uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;