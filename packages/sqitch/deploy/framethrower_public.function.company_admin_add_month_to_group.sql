-- Deploy framethrower:framethrower_public.function.company_admin_add_month_to_group to pg

begin;

  create or replace function framethrower_public.company_admin_add_month_to_group(
    month_ integer,
    year_ integer,
    amount_feedbacks_ integer,
    group_id_ uuid
    )returns framethrower_public.company_group_month as $$

    declare company_id_ uuid;
    declare group_ framethrower_public.company_pro_group;
    declare month__ framethrower_public.company_group_month;

    begin
      select company_id
      from framethrower_public.company_admin_users
      where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid
      into company_id_;

      select *
      from framethrower_public.company_pro_group
      where company_pro_group.company_id = company_id_
      and company_pro_group.id = group_id_
      into group_;

      if company_id_ is null OR group_ is null then
        return null;
      else
        insert into framethrower_public.company_group_month (group_id, month, year, amount_feedbacks) values (group_.id, month_, year_, amount_feedbacks_)
        on conflict do nothing returning * into month__;
      end if;
      return month__;
    end;
  $$ language plpgsql security definer;


grant execute on function framethrower_public.company_admin_add_month_to_group(integer, integer, integer, uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;