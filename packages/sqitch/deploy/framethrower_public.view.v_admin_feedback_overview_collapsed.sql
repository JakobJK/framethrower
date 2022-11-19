-- Deploy flipr:framethrower_public.view.v_admin_feedback_overview_collapsed to pg

begin;
  create view framethrower_public.v_admin_feedback_overview_collapsed as
    select
    res.profile_id,
    prof.username,
    prof.avatar,
    count(res.id),
    extract(month from res.created_at)::integer as month,
    extract(year from res.created_at)::integer as year
    from framethrower_public.feedback_response res
    join framethrower_public.profile prof on prof.id = res.profile_id
    where res.status = 'processed' group by
    prof.avatar, res.profile_id, month, year, prof.username;
  grant select on framethrower_public.v_admin_feedback_overview_collapsed to framethrower_admin;
commit;
