
begin;

  create or replace function framethrower_private.cron_refill_submissions()
    returns framethrower_public.premium as $$
    update framethrower_public.premium set built_in_feedback = 0, updated_at = now();
    update framethrower_public.premium set built_in_feedback = company_group_month.amount_feedbacks
    from framethrower_public.company_group_premium, framethrower_public.company_group_month
    where company_group_month.month = extract(month from now())::integer and company_group_month.year = extract(year from now())::integer and premium.id = company_group_premium.premium_id returning premium.*;

    $$ language sql security invoker;

commit;
