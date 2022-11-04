import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import Dragon from "../../public/dragon.jpg"
import Discord from "../../public/discord.svg"
import { useState } from "react";

const Messages = () => {
  const { data: characterDetails, isLoading } = trpc.character.getAll.useQuery()

  if(isLoading) return <div>Fetching messages...</div>
  return(
    <div className="flex flex-col gap-4">
      {
        characterDetails ? characterDetails.map((cd,index)=>{
          return (
            <div key={index}>
              <p>Player Name: {cd.PlayerName}</p>
              <p>Character Name: {cd.CharName}</p>
              <p>Character Race: {cd.CharRace}</p>
              <p>Character Class: {cd.CharClass}</p>
              <p>Character Background: {cd.CharBackground}</p>
              <p>Character Alignment: {cd.CharAlignment}</p>
              <p>Initiative: {cd.CharInitiative}</p>
              <p>Speed: {cd.CharSpeed}</p>
              <p>Proficiency: {cd.CharProficiency}</p>
              <p>Inspiration: {cd.CharInspiration}</p>
              <p>Armor Class: {cd.CharArmorClass}</p>
              <p>Personality Traits: {cd.CharPersonality}</p>
              <p>Strength: {cd.CharStrength}</p>
              <p>Saving Throws: {cd.StrengthSaving}</p>
              <p>Athletics: {cd.StrengthAthLetics}</p>
              <p>Dexterity: {cd.CharDexterity}</p>
              <p>Saving Throws: {cd.DexteritySaving}</p>
              <p>Acrobatics: {cd.DexterityAcrobatics}</p>
              <p>Sleight of Hand: {cd.DexteritySleight}</p>
              <p>Stealth: {cd.DexterityStealth}</p>
              <p>Constitution: {cd.CharConstitution}</p>
              <p>Saving Throws: {cd.ConstitutionSaving}</p>
              <p>Intelligence: {cd.CharIntelligence}</p>
              <p>Saving Throw: {cd.IntelligenceSaving}</p>
              <p>Arcana: {cd.IntelligenceArcana}</p>
              <p>History: {cd.IntelligenceHistory}</p>
              <p>Investigation: {cd.IntelligenceInvestigate}</p>
              <p>Nature: {cd.IntelligenceNature}</p>
              <p>Religion: {cd.IntelligenceReligion}</p>
              <p>Initiative: {cd.CharInitiative}</p>
              <p>Wisdom: {cd.CharWisdom}</p>
              <p>Saving Throw: {cd.WisdomSaving}</p>
              <p>Animal Handling: {cd.WisdomAnimal}</p>
              <p>Insight: {cd.WisdomInsight}</p>
              <p>Medicine: {cd.WisdomMedicine}</p>
              <p>Perception: {cd.WisdomPerception}</p>
              <p>Survival: {cd.WisdomSurvival}</p>
              <p>Passive Wisdom: {cd.PassiveWisdom}</p>
              <p>Charisma: {cd.CharCharisma}</p>
              <p>Saving Throws: {cd.CharismaSaving}</p>
              <p>Deception: {cd.CharismaDeception}</p>
              <p>Intimidation: {cd.CharismaIntimidation}</p>
              <p>Performance: {cd.CharismaPerformance}</p>
              <p>Persuasion: {cd.CharismaPersuasion}</p>
              <p>Treasure: {cd.Treasures}</p>
              <p>Armour Class: {cd.CharArmorClass}</p>
              <p>HitPoints: {cd.CharHitPoints}</p>
              {/* Needs a place where I can add wounds */}
              <p>Level: {cd.CharLevel}</p>
              {/* Needs Experience Needed */}
              <p>Age: {cd.CharAge}</p>
              <p>Height: {cd.CharHeight}</p>
              <p>Weight: {cd.CharWeight}</p>
              <p>Vision: {cd.CharVision}</p>
              <p>Skin: {cd.CharSkin}</p>
              <p>Hair: {cd.CharHair}</p>
              <p>Eyes: {cd.CharEyes}</p>
              <p>Reputation: {cd.CharReputation}</p>
              <p>Attacks & Spells</p>
              <ul>
                <li>Name: {cd.CharAttacksSpellNames1} Attack: {cd.CharAttacksSpellAttack1} Damage: {cd.CharAttacksSpellDamage1} Range: {cd.CharAttacksSpellRange1} Ammo: {cd.CharAttacksSpellAmmo1} Used: {cd.CharAttacksSpellUsed1}</li>
                <li>Name: {cd.CharAttacksSpellNames2} Attack: {cd.CharAttacksSpellAttack2} Damage: {cd.CharAttacksSpellDamage2} Range: {cd.CharAttacksSpellRange2} Ammo: {cd.CharAttacksSpellAmmo2} Used: {cd.CharAttacksSpellUsed2}</li>
                <li>Name: {cd.CharAttacksSpellNames3} Attack: {cd.CharAttacksSpellAttack3} Damage: {cd.CharAttacksSpellDamage3} Range: {cd.CharAttacksSpellRange3} Ammo: {cd.CharAttacksSpellAmmo3} Used: {cd.CharAttacksSpellUsed3}</li>
                <li>Name: {cd.CharAttacksSpellNames4} Attack: {cd.CharAttacksSpellAttack4} Damage: {cd.CharAttacksSpellDamage4} Range: {cd.CharAttacksSpellRange4} Ammo: {cd.CharAttacksSpellAmmo4} Used: {cd.CharAttacksSpellUsed4}</li>
                <li>Name: {cd.CharAttacksSpellNames5} Attack: {cd.CharAttacksSpellAttack5} Damage: {cd.CharAttacksSpellDamage5} Range: {cd.CharAttacksSpellRange5} Ammo: {cd.CharAttacksSpellAmmo5} Used: {cd.CharAttacksSpellUsed5}</li>
                <li>Name: {cd.CharAttacksSpellNames6} Attack: {cd.CharAttacksSpellAttack6} Damage: {cd.CharAttacksSpellDamage6} Range: {cd.CharAttacksSpellRange6} Ammo: {cd.CharAttacksSpellAmmo6} Used: {cd.CharAttacksSpellUsed6}</li>
              </ul>
              <p>Other Proficiencies & Languages</p>
              <p>{cd.CharProficienciesLang}</p>
              <p>Special Abilities</p>
              <p>{cd.CharSpecialAbilities}</p>
              <p>Equipment & character Notes</p>
              <p>{cd.CharNotesEquipment}</p>
              <p>Personality Traits: {cd.CharPersonality}</p>
              <p>Ideals: {cd.CharIdeals}</p>
              <p>Bonds: {cd.CharBonds}</p>
              <p>Flaws: {cd.CharFlaws}</p>
            </div>
          )
        })
      : <p>No Character Sheet Found</p>}
    </div>
  )
}

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [PlayerName,setPlayerName] = useState("")
    const [CharName,setCharName] = useState("")
    const [CharRace,setCharRace] = useState("")
    const [CharClass,setCharClass] = useState("")
    const [CharBackground,setCharBackground] = useState("")
    const [CharAlignment,setCharAlignment] = useState("")
    const [CharInitiative,setCharInitiative] = useState("")
    const [CharSpeed,setCharSpeed] = useState("")
    const [CharProficiency,setCharProficiency] = useState("")
    const [CharInspiration,setCharInspiration] = useState("")
    const [CharStrength,setCharStrength] = useState("")
    const [StrengthSaving,setStrengthSaving] = useState(false)
    const [StrengthAthLetics,setStrengthAthLetics] = useState(false)
    const [CharDexterity,setCharDexterity] = useState("")
    const [DexteritySaving,setDexteritySaving] = useState(false)
    const [DexterityAcrobatics,setDexterityAcrobatics] = useState(false)
    const [DexteritySleight,setDexteritySleight] = useState(false)
    const [DexterityStealth,setDexterityStealth] = useState(false)
    const [CharConstitution,setCharConstitution] = useState("")
    const [ConstitutionSaving,setConstitutionSaving] = useState(false)
    const [CharIntelligence,setCharIntelligence] = useState(   "")
    const [IntelligenceSaving,setIntelligenceSaving] = useState(false)
    const [IntelligenceArcana,setIntelligenceArcana] = useState(false)
    const [IntelligenceHistory,setIntelligenceHistory] = useState(false)
    const [IntelligenceInvestigate,setIntelligenceInvestigate] = useState(false)
    const [IntelligenceNature,setIntelligenceNature] = useState(false)
    const [IntelligenceReligion,setIntelligenceReligion] = useState(false)
    const [CharWisdom,setCharWisdom] = useState("")
    const [WisdomSaving,setWisdomSaving] = useState(false)
    const [WisdomAnimal,setWisdomAnimal] = useState(false)
    const [WisdomInsight,setWisdomInsight] = useState(false)
    const [WisdomMedicine,setWisdomMedicine] = useState(false)
    const [WisdomPerception,setWisdomPerception] = useState(false)
    const [WisdomSurvival,setWisdomSurvival] = useState(false)
    const [PassiveWisdom,setPassiveWisdom] = useState("")
    const [CharCharisma,setCharCharisma] = useState("")
    const [CharismaSaving,setCharismaSaving] = useState(false)
    const [CharismaDeception,setCharismaDeception] = useState(false)
    const [CharismaIntimidation,setCharismaIntimidation] = useState(false)
    const [CharismaPerformance,setCharismaPerformance] = useState(false)
    const [CharismaPersuasion,setCharismaPersuasion] = useState(false)
    const [Treasures,setTreasures] = useState("")
    const [CharArmorClass,setCharArmorClass] = useState("")
    const [CharHitPoints,setCharHitPoints] = useState("")
    const [CharLevel,setCharLevel] = useState("")
    const [CharAge,setCharAge] = useState("")
    const [CharHeight,setCharHeight] = useState("")
    const [CharWeight,setCharWeight] = useState("")
    const [CharVision,setCharVision] = useState("")
    const [CharSkin,setCharSkin] = useState("")
    const [CharHair,setCharHair] = useState("")
    const [CharEyes,setCharEyes] = useState("")
    const [CharReputation,setCharReputation] = useState("")
    const [CharPersonality,setCharPersonality] = useState("")
    const [CharIdeals,setCharIdeals] = useState("")
    const [CharBonds,setCharBonds] = useState("")
    const [CharFlaws,setCharFlaws] = useState("")
    const [CharAttacksSpellNames1,setCharAttacksSpellNames1] = useState("")
    const [CharAttacksSpellAttack1,setCharAttacksSpellAttack1] = useState("")
    const [CharAttacksSpellDamage1,setCharAttacksSpellDamage1] = useState("")
    const [CharAttacksSpellRange1,setCharAttacksSpellRange1] = useState("")
    const [CharAttacksSpellAmmo1,setCharAttacksSpellAmmo1] = useState("")
    const [CharAttacksSpellUsed1,setCharAttacksSpellUsed1] = useState("")
    const [CharAttacksSpellNames2,setCharAttacksSpellNames2] = useState("")
    const [CharAttacksSpellAttack2,setCharAttacksSpellAttack2] = useState("")
    const [CharAttacksSpellDamage2,setCharAttacksSpellDamage2] = useState("")
    const [CharAttacksSpellRange2,setCharAttacksSpellRange2] = useState("")
    const [CharAttacksSpellAmmo2,setCharAttacksSpellAmmo2] = useState("")
    const [CharAttacksSpellUsed2,setCharAttacksSpellUsed2] = useState("")
    const [CharAttacksSpellNames3,setCharAttacksSpellNames3] = useState("")
    const [CharAttacksSpellAttack3,setCharAttacksSpellAttack3] = useState("")
    const [CharAttacksSpellDamage3,setCharAttacksSpellDamage3] = useState("")
    const [CharAttacksSpellRange3,setCharAttacksSpellRange3] = useState("")
    const [CharAttacksSpellAmmo3,setCharAttacksSpellAmmo3] = useState("")
    const [CharAttacksSpellUsed3,setCharAttacksSpellUsed3] = useState("")
    const [CharAttacksSpellNames4,setCharAttacksSpellNames4] = useState("")
    const [CharAttacksSpellAttack4,setCharAttacksSpellAttack4] = useState("")
    const [CharAttacksSpellDamage4,setCharAttacksSpellDamage4] = useState("")
    const [CharAttacksSpellRange4,setCharAttacksSpellRange4] = useState("")
    const [CharAttacksSpellAmmo4,setCharAttacksSpellAmmo4] = useState("")
    const [CharAttacksSpellUsed4,setCharAttacksSpellUsed4] = useState("")
    const [CharAttacksSpellNames5,setCharAttacksSpellNames5] = useState("")
    const [CharAttacksSpellAttack5,setCharAttacksSpellAttack5] = useState("")
    const [CharAttacksSpellDamage5,setCharAttacksSpellDamage5] = useState("")
    const [CharAttacksSpellRange5,setCharAttacksSpellRange5] = useState("")
    const [CharAttacksSpellAmmo5,setCharAttacksSpellAmmo5] = useState("")
    const [CharAttacksSpellUsed5,setCharAttacksSpellUsed5] = useState("")
    const [CharAttacksSpellNames6,setCharAttacksSpellNames6] = useState("")
    const [CharAttacksSpellAttack6,setCharAttacksSpellAttack6] = useState("")
    const [CharAttacksSpellDamage6,setCharAttacksSpellDamage6] = useState("")
    const [CharAttacksSpellRange6,setCharAttacksSpellRange6] = useState("")
    const [CharAttacksSpellAmmo6,setCharAttacksSpellAmmo6] = useState("")
    const [CharAttacksSpellUsed6,setCharAttacksSpellUsed6] = useState("")
    const [CharSpecialAbilities,setCharSpecialAbilities] = useState("")
    const [CharProficienciesLang,setCharProficienciesLang] = useState("")
    const [CharNotesEquipment,setCharNotesEquipment] = useState("")

  const ctx = trpc.useContext()
  const postMessage = trpc.character.postMessage.useMutation({
    onMutate: ()=> {
      ctx.character.getAll.cancel()

      const optimisticUpdate = ctx.character.getAll.getData()
      if(optimisticUpdate){
        ctx.character.getAll.setData(optimisticUpdate)
      }
    },
    onSettled: ()=>{
      ctx.guestbook.invalidate();
    },
  })
  if(status === "loading"){
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }
    
// console.log(session)
  return (
    <>
      <Head>
        <title>CS {session ? `| ${session.user?.name}`: ""}</title>
        <meta name="description" content="DnD Character Sheet" />
        <link rel="icon" href="/dnd.svg" />
      </Head>
      <main className="flex flex-col items-center">
      <div className="bgWrap">
          <Image 
            src={Dragon} 
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
            alt="Dragon Image from https://www.pexels.com/search/dungeons%20and%20dragons/"  
            />
        </div>
        <div className="card bg-slate-500 bg-opacity-80 p-10 rounded mt-48">
          <h1 className="text-3xl pt-4 text-center">Character Sheet</h1>
          {
            session ? (
              <div className="pt-10">
                <p className="mb-5">Hi {session.user?.name}</p>
                <button className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none hover:bg-red-400 hover:border-red-400" onClick={()=> signOut()}>
                  Logout
                </button>
                <div className="pt-6">
                  <form
                    className="flex gap-2"
                    onSubmit={(event)=>{
                      event.preventDefault();

                      postMessage.mutate({
                        PlayerName: session.user?.name as "",
                        CharName,
                        CharRace,
                        CharClass,
                        CharBackground,
                        CharAlignment,
                        CharInitiative,
                        CharSpeed,
                        CharProficiency,
                        CharInspiration,
                        CharStrength,
                        StrengthSaving,
                        StrengthAthLetics,
                        CharDexterity,
                        DexteritySaving,
                        DexterityAcrobatics,
                        DexteritySleight,
                        DexterityStealth,
                        CharConstitution,
                        ConstitutionSaving,
                        CharIntelligence,
                        IntelligenceSaving,
                        IntelligenceArcana,
                        IntelligenceHistory,
                        IntelligenceInvestigate,
                        IntelligenceNature,
                        IntelligenceReligion,
                        CharWisdom,
                        WisdomSaving,
                        WisdomAnimal,
                        WisdomInsight,
                        WisdomMedicine,
                        WisdomPerception,
                        WisdomSurvival,
                        PassiveWisdom,
                        CharCharisma,
                        CharismaSaving,
                        CharismaDeception,
                        CharismaIntimidation,
                        CharismaPerformance,
                        CharismaPersuasion,
                        Treasures,
                        CharArmorClass,
                        CharHitPoints,
                        CharLevel,
                        CharAge,
                        CharHeight,
                        CharWeight,
                        CharVision,
                        CharSkin,
                        CharHair,
                        CharEyes,
                        CharReputation,
                        CharPersonality,
                        CharIdeals,
                        CharBonds,
                        CharFlaws,
                        CharAttacksSpellNames1,
                        CharAttacksSpellAttack1,
                        CharAttacksSpellDamage1,
                        CharAttacksSpellRange1,
                        CharAttacksSpellAmmo1,
                        CharAttacksSpellUsed1,
                        CharAttacksSpellNames2,
                        CharAttacksSpellAttack2,
                        CharAttacksSpellDamage2,
                        CharAttacksSpellRange2,
                        CharAttacksSpellAmmo2,
                        CharAttacksSpellUsed2,
                        CharAttacksSpellNames3,
                        CharAttacksSpellAttack3,
                        CharAttacksSpellDamage3,
                        CharAttacksSpellRange3,
                        CharAttacksSpellAmmo3,
                        CharAttacksSpellUsed3,
                        CharAttacksSpellNames4,
                        CharAttacksSpellAttack4,
                        CharAttacksSpellDamage4,
                        CharAttacksSpellRange4,
                        CharAttacksSpellAmmo4,
                        CharAttacksSpellUsed4,
                        CharAttacksSpellNames5,
                        CharAttacksSpellAttack5,
                        CharAttacksSpellDamage5,
                        CharAttacksSpellRange5,
                        CharAttacksSpellAmmo5,
                        CharAttacksSpellUsed5,
                        CharAttacksSpellNames6,
                        CharAttacksSpellAttack6,
                        CharAttacksSpellDamage6,
                        CharAttacksSpellRange6,
                        CharAttacksSpellAmmo6,
                        CharAttacksSpellUsed6,
                        CharSpecialAbilities,
                        CharProficienciesLang,
                        CharNotesEquipment,
                      });
                      
                     
                    }}
                    >
                      <input 
                        type="text"
                        value={CharName}
                        placeholder="Your Character Name..."
                        maxLength={100}
                        onChange={(event)=> setCharName(event.target.value)}
                        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
                      /> 
                      <input 
                        type="text"
                        value={CharRace}
                        placeholder="Your Character Name..."
                        maxLength={100}
                        onChange={(event)=> setCharRace(event.target.value)}
                        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
                      /> 
                      <button
                        type="submit"
                        className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none hover:bg-red-400 hover:border-red-400"
                        >
                        Submit
                      </button>
                  </form> 
                </div>
               <div className="pt-10">
                  <Messages />
                </div>
              </div>
            ) : (
              <div>    
                <div className="card border-2 border-red-400 p-2 rounded text-center">
                  <h1 className="text-center font-extrabold text-lg">Login</h1>
                <button className="mt-10 btn p-1 rounded hover:bg-red-400" onClick={()=> signIn("discord")}>
                  <Image
                    src={Discord}
                    width={64}
                    height={64}
                    alt="Icon by https://freeicons.io/profile/722"
                    />
                </button>
                </div>
              </div>
            )
          }
        </div>
        <div className="footer">
            <p className="pt-10 mt-10">version 1.0</p>
          </div>
      </main>
    </>
  );
};

export default Home;

